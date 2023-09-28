import { UploadOutlined } from '@ant-design/icons';
import { Button, Skeleton, Upload } from 'antd';
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
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      {imageSrc && <img src={imageSrc} alt='' />}
    </>
  );
};

export default UploadImage;
