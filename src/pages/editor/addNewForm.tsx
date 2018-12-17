import { Steps, Modal, Button, message, Input } from 'antd';
import Form from "react-jsonschema-form";
import * as React from 'react';
import ReactJson from 'react-json-view';
import "./addNewForm.scss";
const GenerateSchema = require('generate-schema');
const { TextArea } = Input;
const Step = Steps.Step;


export default class AddFormModal extends React.Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        exampleJsonString: "",
        schemaJson: {},
        current: 0,
    }
    next() {
        const current = this.state.current + 1;
        if (this.state.current === 0 && this.state.exampleJsonString.trim()) {
            try {
                this.setState({ schemaJson: GenerateSchema("testttt", JSON.parse(this.state.exampleJsonString.trim())) })
            } catch (e) {
                message.error("表单生成出错", e);
                return;
            }
        }
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    handleTextAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            exampleJsonString: e.target.value
        })
    }
    render() {
        const { visible, confirmLoading, current, schemaJson } = this.state;
        const steps = [{
            title: '输入样例数据',
            content: <TextArea onChange={this.handleTextAreaChange.bind(this)} placeholder="在此处粘贴json样例数据" autosize={{ minRows: 2, maxRows: 6 }} />,
        }, {
            title: '编辑表单',
            content: <div>
                <div><ReactJson iconStyle="square" enableClipboard={true} collapseStringsAfterLength={15} collapsed={2} src={schemaJson} style={{ "alignSelf": "flex-start" }} /></div>
                <div>
                    <Form schema={schemaJson} />
                </div>
            </div>,
        }];

        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal with async logic
        </Button>
                <Modal
                    title="Title"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <div>
                        <Steps current={current}>
                            {steps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">{steps[current].content}</div>
                        <div className="steps-action">
                            {
                                current < steps.length - 1
                                && <Button type="primary" onClick={() => this.next()}>下一步</Button>
                            }
                            {
                                current === steps.length - 1
                                && <Button type="primary" onClick={() => message.success('Processing complete!')}>提交</Button>
                            }
                            {/* {
                                current > 0
                                && (
                                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                        Previous
            </Button>
                                )
                            } */}
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}