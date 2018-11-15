import { Input, Button } from 'antd';
import * as React from 'react';

const Email = Input.Search;
class verify extends React.Component {
    public render() {
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Email addonAfter="@vite.org" defaultValue="mysite" enterButton="Search"
                        size="large"
                        onSearch={(value:String) => console.log(value) />
                </div>
                < div style={{ marginBottom: 16 }}>
                        <Input />
                    </div>
                    < div style={{ marginBottom: 16 }}>
                        <Button />
                    </div>
                </div>
                )
            }
}