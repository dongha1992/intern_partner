import RequestDetailHeader from '../../../../../components/Header/RequestDetailHeader';
import RequestInfo from '../../../../../components/RequestDetail/RequestInfo';
import ProposalInfo from '../../../../../components/RequestDetail/ProposalInfo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './ConfirmationDetail.scss';
import {
  DISPATCH_CANCEL,
  DISPATCH_COMPLETE,
} from '../../../../../constants/requestDetail/ProposalInfo';
import axios from 'axios';

const isReservation = true;
const ConfirmationDetail = ({ list }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id, 'Ddd');
  return (
    <div className={styles.container}>
      <RequestDetailHeader />
      <div className={styles.menuTab}>
        <a
          className={styles.active}
          onClick={() => {
            router.push(`/user/main/reservation/detail/${id}`);
          }}>
          요청상세
        </a>
        <Link href='/user/main/reservation/detail/chat'>
          <a>채팅</a>
        </Link>
      </div>
      <RequestInfo list={list} />
      <ProposalInfo
        isReservation={isReservation}
        leftButtonValue={DISPATCH_CANCEL}
        rightButtonValue={DISPATCH_COMPLETE}
        list={list}
      />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios('http://localhost:5700/api/getRequestInfo');
  const list = await res.data;
  console.log(list, 'difjsdoifjwoj');
  return {
    props: { list },
  };
}

export default ConfirmationDetail;

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
// 		fallback: false,
// 	};
// }

// export async function getStaticProps(context) {
// 	const id = context.params.id;
// 	const API = "http://localhost:5700/api/getRequestInfo";
// 	const apiUrl = `API/${id}`;
// 	const res = await axios.get(apiUrl);
// 	const data = res.data;

// 	return {
// 		props: {
// 			item: data,
// 			name: process.env.name,
// 		},
// 	};
// }
