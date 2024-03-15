'use client'
import { useEffect, useState } from 'react';
import { getClient } from './components/server';
interface Client {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  active: boolean;
};

export default function Home() {
  const [client, setClient] = useState<Client>()

  const onClickFindClient = async () => {
    const { client, error } = await getClient(2);
    setClient(client as Client)
  }

  useEffect(() => {
    const fetchData = async () => {
      const { client, error } = await getClient(1);
      setClient(client as Client)
    }
    fetchData()
  }, [])
  return (
    <main style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: "100%", height: "100vh", backgroundColor: "#000000"}}>
      <div style={{display: 'flex', gap:2, flexDirection: "column", backgroundColor: "#eaeaea", padding: "15px 20px", borderRadius: 15, marginBottom: 15, minWidth: "400px"}}>
        <span><b>id:</b> {client?.id}</span>
        <br/>
        <span><b>FistName:</b> {client?.firstName}</span>
        <br/>
        <span><b>LastName:</b> {client?.lastName}</span>
        <br/>
        <span><b>Email:</b> {client?.email}</span>
        <br/>
        <span><b>Age:</b> {client?.age}</span>
        <br/>
      </div>
      <button onClick={onClickFindClient} style={{padding: "5px 25px", backgroundColor: "rgb(14, 165, 233)", color: "white", border: "none", borderRadius: 5}}>find</button>
    </main>
  );
}
