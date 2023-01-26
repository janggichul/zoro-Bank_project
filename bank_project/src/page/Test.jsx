import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Auth } from '../App';
import { LoginState } from '../component/LoginState';
import dummy from '../data/dummy.json'

export default function Test() {

  const [user, setUser] = useRecoilState(LoginState)
  const navigate = useNavigate()

  const Profile = () => {
    signOut(Auth).then((result) => {
      console.log('로그아웃',result)
        navigate('/')
        window.location.reload()
        
      }).catch ((error) => {
        console.log(error)
      })
  }
  const str = (user.user.uid)    
  const first = str.charAt(-1)
  console.log(first)

  const userData = dummy.words.filter(word => (word.id == first))
  
  console.log('user', userData)
  
  useEffect(() => {
    console.log(user)
  },[])
  
    console.log('dum', dummy)

  return (
    <>
    <div>test</div>
    <form onSubmit={Profile}>
    <button type="submit" >로그아웃</button>
    <div>
      <tbody>
        {userData.map(word => (
          <tr>
        <td>{word.eng}</td>
        <td>{word.kor}</td>
      </tr>
      ))}
      </tbody>
    </div>
    </form>
    </>
    )
  }

  
  
  
  
  
  //   const getData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "name"));
  //   querySnapshot.forEach((doc) => {
  //     // setUser(doc.data())
  //       console.log(`${doc.id} => ${doc.data()}`);
  //      });
  // }
  //    useEffect(() => {
  //     getData()
  //   console.log(db)
  //  })  

  //  console.log()