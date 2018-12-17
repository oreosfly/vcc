
import Form from "react-jsonschema-form";
import * as React from 'react';
import './editor.scss';

export default class Editor extends React.Component {
    constructor(props: object) {
        super(props);
    }
    onSubmit() {

    }
    public render() {
        return (
            <div className="editor-container">
                <Form schema={this.props.schema}
                    formData={this.props.data}
                    onSubmit={this.onSubmit} />
            </div>
        )
    }
}
