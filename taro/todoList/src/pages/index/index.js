import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'get up',
        'coding',
        'sleep',
      ],
      inputValue: '',
    }
  }

  config = {
    navigationBarTitleText: 'taro首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className="list_wrap">
          <Text>Todo list</Text>
          <Input className="input" type="text" value={this.state.inputValue} 
          onInput = {this.inputHandler.bind(this)} />
          <Text className="add" onClick={this.addItem.bind(this)}>添加</Text>
          {
            list.map((item, index) => {
              return <View>
                <Text>{index + 1}.{item}</Text>
                <Text className="del" onClick={this.delItem.bind(this, index)}>删除</Text>
              </View>
            })
          }
        </View>
      </View>
    )
  }

  addItem () {
    let { list, inputValue } = this.state;
    if (inputValue == '') return;
    else {
      list.push(inputValue);
      this.setState({
        list,
        inputValue: '',
      });
      console.log(this.state);
    }
  }

  inputHandler(e) {
    let inputValue = e.target.value;
    this.setState({
      inputValue,
    })
  }

  delItem (index) {
    let { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list,
    })
  }
}
