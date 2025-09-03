import { init, location } from '@wjfe/n-savant'
import { mount } from 'svelte'
import App from './App.svelte'
import './App.css'

init()
location.goTo('/')

//@ts-ignore
const app = mount(App, { target: document.getElementById('app') })

export default app
