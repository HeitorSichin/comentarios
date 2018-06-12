import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comment from './Comment'

describe('<Comment />', () => {
    const comment = {
        comment: 'teste'
    }
    it('renderizar sem quebrar',()=>{
        const wrapper = shallow(<Comment comment={comment} />)
        expect(wrapper.length).toBe(1)
        expect(wrapper.is('.card')).toBe(true)
        expect(wrapper.text().trim()).toBe(comment.comment)
    })


})
