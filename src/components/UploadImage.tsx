import { UploadOutlined, CloseOutlined } from '@ant-design/icons';
import { Col, Row, Skeleton, Typography, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useContext, useState } from 'react';
import { GlobalContextType, GlobalStateContext } from '../contexts/GlobalState';

const UploadImage: React.FC = () => {
  const { data, setData } = useContext<GlobalContextType>(GlobalStateContext);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const props: UploadProps = {
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      // Display the selected image
      const reader = new FileReader();
      reader.readAsDataURL(file as Blob);
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setData &&
          setData((prevData) => ({
            ...prevData,
            attributes: {
              ...prevData.attributes,
              coverImage: reader.result as string,
            },
          }));
      };

      return false;
    },
    fileList,
  };

  if (!data)
    return (
      <>
        <Skeleton.Button
          active
          block={true}
          size='large'
          shape='square'
          style={{ height: '200px' }}
        />
      </>
    );

  return (
    <>
      {!imageSrc && (
        <Upload {...props}>
          <div
            style={{
              textAlign: 'center',
              border: '1px dashed black',
              width: '450px',
              cursor: 'pointer',
            }}>
            <p>
              <UploadOutlined style={{ fontSize: '30px' }} />
            </p>
            <p>Upload cover image</p>
            <p style={{}}>16:9 ratio is recommended. Max image size 1mb </p>
          </div>
        </Upload>
      )}
      {imageSrc && <img src={imageSrc} alt='' style={{ width: '100%' }} />}
      {imageSrc && (
        <Row
          style={{ marginTop: '30px', alignItems: 'center', gap: '20px', cursor: 'pointer' }}
          onClick={() => {
            setFileList([]);
            setImageSrc(null);
            setData &&
              setData((prevData) => ({
                ...prevData,
                attributes: {
                  ...prevData.attributes,
                  coverImage: 'http://example.com',
                },
              }));
          }}>
          <Col span={1}>
            <CloseOutlined style={{ fontSize: '20px', color: 'red' }} />
          </Col>
          <Col>
            <Typography style={{ fontSize: '15px', fontWeight: 'bold', color: 'red' }}>
              Delete & re-upload
            </Typography>
          </Col>
        </Row>
      )}
    </>
  );
};

export default UploadImage;
