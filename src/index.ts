#!/usr/bin/env node
/* eslint-disable no-console */
import inquirer from 'inquirer';

import { getMessage } from './utils';

inquirer
  .prompt([{ name: 'name', message: "What's your name?" }])
  .then(({ name }) => console.log(getMessage(name)))
  .catch(console.error);
