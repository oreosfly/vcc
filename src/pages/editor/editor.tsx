// import the react-json-view component
import ReactJson from 'react-json-view';
import { Button } from 'antd';
import * as React from 'react';

class Editor extends React.Component {
    public render() {
        return (
            <div>
            <ReactJson src={my_json_object} />
            <div>
                <Button type="primary">保存</Button>
            </div>
            </div>
        )
    },
    props:
}
