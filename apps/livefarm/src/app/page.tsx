import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function Index() {
  const navigate = useRouter();
  return (
    <div>
      <h1>Olá</h1>

      <button
        onClick={() => {
          navigate.push('/user/1');
        }}
      >
        Testar página de ID
      </button>
    </div>
  );
}
