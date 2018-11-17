// import the react-json-view component
import ReactJson from 'react-json-view';
import { Button } from 'antd';
import * as React from 'react';
import json from './mock.json';

export default class Editor extends React.Component {
    public render() {
        return (
            <div>
            <ReactJson src={json} />
            <div>
                <Button type="primary">保存</Button>
            </div>
            </div>
        )
    }
}
