import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import Novel from '../../components/Novel'

describe('Components - Novel', () => {
  it('displays the Novel with their title, authorFirstName and authorLastName', () => {
    const wrapper = shallow(<Novel id={1983} className="novel" title="Reading Rainbow" authorFirstName="LaVar" authorLastName="Burton" />)
    expect(wrapper.text()).to.equal('Reading Rainbow by LaVar Burton')
  })
})
