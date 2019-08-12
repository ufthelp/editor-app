import React from 'react'
import {shallow} from 'enzyme'
import TreeView from './TreeView'


describe('<TreeView /> Component', ()=>{
    let wrapper;
    const data =  [
          {
            text: "Furniture",
            expanded: true,
            items: [
              { text: "Tables & Chairs" },
              { text: "Sofas" },
              { text: "Occasional Furniture" }
            ]
          },
          {
            text: "Decor",
            items: [
              { text: "Bed Linen" },
              { text: "Curtains & Blinds" },
              { text: "Carpets" }
            ]
          }
        ];
    beforeEach(()=>wrapper = shallow(<TreeView data={data}/>))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should contain a State as content',()=>{
        expect(wrapper.state('data')).toStrictEqual(data);
    })
})

