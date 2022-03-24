import React, { useState, useEffect, useContext } from "react";
import axios from "../../../api/axios";
import CampContext, { CampProvider } from "../../../providers/CampProvider";
import AuthContext, { AuthProvider } from "../../../providers/AuthProvider";


export default function DropDownListNpc(props) {
  const [npc, setNpc] = useState([])
  const { auth } = useContext(AuthContext);
  const { campaign_id } = useContext(CampContext);

  const u_id = auth.user_id
  const c_id = campaign_id


  const address = `/users/${u_id}/campaigns/${c_id}`

  useEffect(() => {
    axios.get(`${address}/npcs`)
    .then((res) => {
      setNpc(res.data)

    })
  }, [])

  return (
    <select className="card__dropdown" 
    onChange={props.onChange}
    >
      <option value="Set Npc">Set Npc</option>
      {npc.map(npc => <option key={npc.id} value={npc.id}>{npc.name}</option>)}
    </select>
  )
}