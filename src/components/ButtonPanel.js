import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div>
    <tr>
      <Button buttonName="AC" />
      <Button buttonName="+/-" />
      <Button buttonName="%" />
      <Button buttonName="÷" />
    </tr>
    <tr>
      <Button buttonName="7" />
      <Button buttonName="8" />
      <Button buttonName="9" />
      <Button buttonName="X" />
    </tr>
    <tr>
      <Button buttonName="4" />
      <Button buttonName="5" />
      <Button buttonName="6" />
      <Button buttonName="-" />
    </tr>
    <tr>
      <Button buttonName="1" />
      <Button buttonName="2" />
      <Button buttonName="3" />
      <Button buttonName="+" />
    </tr>
    <tr>
      <Button buttonName="0" />
      <Button buttonName="." />
      <Button buttonName="=" />
    </tr>
  </div>
);

export default ButtonPanel;
