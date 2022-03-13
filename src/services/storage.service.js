import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firebaseApp } from '../utils/core';
import localStorageService from './localStorage.service';
import { toast } from 'material-react-toastify';

const storage = getStorage(firebaseApp);

const uploadAvatar = async (file) => {
  const accountId = localStorageService.getAccountId();
  try {
    const fileRef = ref(storage, 'avatar-' + accountId);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  } catch (error) {
    const { message } = error;
    toast.error(message);
  }
};

const storageService = {
  uploadAvatar,
};

export default storageService;
