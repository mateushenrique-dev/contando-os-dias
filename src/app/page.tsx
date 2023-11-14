import Form from '../components/Form';
import Numbers from '../components/Numbers';
import styles from "./style.module.scss";
import RecoilRootAsClient from '../state/RecoilRootContext';

export default function Home() {
  return (
    <main className={styles.calculator}>
      <RecoilRootAsClient>
        <Form />
        <Numbers />    
      </RecoilRootAsClient>
    </main>
  )
}