import React from 'react';

function AccountGitHub(props) {
  return (
        <li>
        <a href={props.adress} target="_blank"> {props.autor} </a>
        </li>
  );
}
export default AccountGitHub;
