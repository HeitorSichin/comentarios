
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App from './App'

describe('<App />', ()=> {
  const base = {
    syncState: jest.fn()
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.length).toBe(1)
  })

  it('should have .container class', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.is('.container')).toBe(true)
  })

  it('shows commments - mostrar os comentários', ()=> {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('Comments').length).toBe(1)
  })

  it('shows newCommment - mostrar novos comentários', ()=> {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('NewComment').length).toBe(1)
  })

  it('adiciona um novo comentário no state do postNewComment qdo é chamado', ()=> {
    const wrapper = mount(<App base={base} />)
    wrapper.instance().postNewComment({ comment: 'teste1' })
    wrapper.instance().postNewComment({ comment: 'teste2' })
    wrapper.instance().postNewComment({ comment: 'teste3' })
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(3)
  })

  /*
  it('outputs the <App/>', () => {
    const wrapperShallow = shallow(<App/>)
    const wrapperMount = mount(<App/>)
    const wrapperRender = render(<App/>)

    console.log(wrapperShallow.debug())
    console.log(wrapperShallow.debug())
    console.log(wrapperRender.html())
  })
  */
})
