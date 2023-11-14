import { atom } from 'recoil';
import IDates from '../interface/IDates';

export const dates = atom<IDates | null>({
  key: "dates",
  default: null
})