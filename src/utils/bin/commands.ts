import { getQuote } from '../api';
import { getReadme } from '../api';

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  let c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `
Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `
Hi! I'm ${config.name}. Welcome to my site

More about me:
'sumfetch' - short summary.
'readme' - my github readme.`;
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `
Thank you for your interest. Here are the ways you can support me!

  <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
  <u><a class="text-light-blue dark:text-dark-blue underline" >${config.donate_urls.bitcoin}</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `re
Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return `
Opening Github...`;
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return `
Opening LinkedIn...`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `
${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `
bin
dev
etc
home
lib
mnt
opt
root
usr
var`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `
Unfortunately, disk space costs money.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `
Permission denied: this incident might be reported?`;
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `
Opening GitHub README...\n
  ${readme}`;
};

export const sumfetch = (args?: string[]): string => {
  return `
       o8%8888,                    sumfetch        
     o88%8888888.                 -----------
    8'-    -:8888b                 ABOUT
   8'         8888                 ${config.name}
  d8.-=. ,==-.:888b                Adelaide  Melbourne
  >8 '~\' :'~' d8888                B.E. (Honours) (Software)
  88         ,88888                <u><a href="${config.repo}" target="_blank">Github</a></u>
  88b. '-~  ':88888               -----------
  888b ~==~ .:88888                CONTACT 
  88888o--:':::8888                <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  88888| :::' 8888b                <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
  8888^^'       8888b              <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
 d888           ,%888b.           -----------
d88%            %%%8--'-.          DONATE 
/88:.__ ,       _%-' --- -         <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
   '''::===..-'   =  --.  '        <u><a class="text-light-blue dark:text-dark-blue underline" >${config.donate_urls.bitcoin}</a></u>
`;
};

export const banner = (args?: string[]): string => {
  return (
    sumfetch() +
    `

  Type 'help' to see the list of available commands.
  Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for my Github account.
`
  );
};
