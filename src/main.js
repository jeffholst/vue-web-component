import { defineCustomElement } from 'vue'
import MyButton from './components/Button.ce.vue'

const MyButtonComponent = defineCustomElement(MyButton)
customElements.define('custom-button', MyButtonComponent)
