import { create } from 'zustand';

const usePostImfomation = create((set) => ({
  usePostInfomation: {
    postTitle : '',
    fileUrl : ''
  },
  setUsePostInfomation: (targetName) => set(()=>({ usePostInfomation: { postTitle : targetName.postTitle, fileUrl : targetName.fileUrl } })),
}));

export default usePostImfomation;