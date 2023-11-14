import { useRecoilValue } from 'recoil';
import { dateSelector } from '../date-selector';

export default function useGetNumbers() {

  const dates = useRecoilValue(dateSelector);

  return dates
}