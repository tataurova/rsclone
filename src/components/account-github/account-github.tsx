import * as React from 'react';

type AccountType = {
  address: string;
  author: string;
}

const AccountGithub = (props: AccountType) => (
    <li>
        <a href={props.address} target="_blank" rel="noreferrer" > {props.author} </a>
    </li>
);

export default AccountGithub;
