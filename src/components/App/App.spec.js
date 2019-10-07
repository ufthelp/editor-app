// import React from 'react'
// import {shallow} from 'enzyme'
// import App from './App'
// import LeftPanel from "../LeftPanel";
// import MiddlePanel from "../MiddlePanel";
// import RightPanel from "../RightPanel";

// describe('<App /> Component', ()=>{
//     let wrapper;
//     beforeEach(()=>wrapper = shallow(<App />))

//     it('should render correctly', () => expect(wrapper).toMatchSnapshot());

//     it('should contain a State as content',()=>{
//         expect(wrapper.state('content')).toBe('Explorer');
//     })

//     it('should contain a <LeftPanel /> component',()=>{
//         expect(wrapper.containsMatchingElement(<LeftPanel 
//                 handleShowRightView={wrapper.instance().handleShowRightView}
//                 selectedIndex={1}/>)
//             ).toEqual(false);
//     })

//     it('should contain a <MiddlePanel /> component',()=>{
//         expect(wrapper.containsMatchingElement(<MiddlePanel 
//             content={wrapper.instance().state.content}
//             visibility />
//         )).toEqual(true);
//     })

//     it('should contain a <RightPanel /> component',()=>{
//         expect(wrapper.containsMatchingElement(<RightPanel />)).toEqual(true);
//     })
// })

const faker = require('faker');
const puppeteer = require('puppeteer');

const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, 
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.App-title');

    const html = await page.$eval('.App-title', e => e.innerHTML);
    expect(html).toBe('Welcome to React');

    browser.close();
  }, 30000);
});