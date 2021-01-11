import * as React from 'react';

type AccountType={
  address: string;
  author: string;
}

function AccountGitHub(props: AccountType) {
  return (
        <li>
        <a href={props.address} target="_blank" rel="noreferrer" > {props.author} </a>
        </li>
  );
}
export default AccountGitHub;
