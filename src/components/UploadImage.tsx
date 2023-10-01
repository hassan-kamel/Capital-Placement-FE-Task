import { UploadOutlined, CloseOutlined } from '@ant-design/icons';
import { Col, Row, Skeleton, Typography, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useContext, useState } from 'react';
import { GlobalStateContext } from '../contexts/GlobalState';

const UploadImage: React.FC = () => {
  const context = useContext(GlobalStateContext);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      // Display the selected image
      const reader = new FileReader();
      reader.readAsDataURL(file as Blob);
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };

      return false;
    },
    fileList,
  };

  if (!context?.data)
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
