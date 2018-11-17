import { Tree } from 'antd';
import * as React from 'react';
import metajson from './mockMeta.json';

const TreeNode = Tree.TreeNode;

interface ItreeData {
    children?: ItreeData[] | null | undefined,
    name: string,
    key: string
}
export default class SearchTree extends React.Component {
    constructor(props:object) {
        super(props)
        this.state = {
            selected: null
        }
    }

    public render() {
        const loop = (data: ItreeData[]) => data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode key={item.key} title={item.name}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={item.name} />;
        });
        return (
            <div>
                <Tree>
                    {loop(metajson)}
                </Tree>
            </div>
        );
    }
}