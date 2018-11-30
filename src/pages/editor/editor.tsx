// import the react-json-view component
import ReactJson from 'react-json-view';
import { Button } from 'antd';
import * as React from 'react';
import json from './mock.json';
import './editor.scss';


export default class Editor extends React.Component {
    public render() {
        return (
            <div className="editor-container">
                <ReactJson iconStyle="square" enableClipboard={true}  collapseStringsAfterLength={15} collapsed={2} src={json} style={{"alignSelf": "flex-start"}} />
                <Button type="primary" className="btn-save">保存</Button>
            </div>
        )
    }
}
