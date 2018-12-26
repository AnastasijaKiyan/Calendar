import React, { Component } from 'react';
import { IDay } from '../../../type/IDay';
import { IState } from '../../../type/IState'
import dataDay from '../../../data/dataday';
import { render } from 'react-dom';

interface IProps {
days: IDay[];
}

export default class CalendarBody extends React.Component <IProps, IState> {
  constructor(props: IProps){
    super(props);
  }
    render() {

    }
}
