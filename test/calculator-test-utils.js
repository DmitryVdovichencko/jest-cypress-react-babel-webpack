import React from 'react'
import PropTypes from 'prop-types'
import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import {dark} from '../src/themes'

function render(ui, {theme = dark, ...options} = {theme:dark}){
	function Wrapper({children}){
		return <ThemeProvider theme={theme}>{children}</ThemeProvider>
	}
	
	Wrapper.propTypes = {
		children: PropTypes.node
	}
	return rtlRender(ui, {wrapper:Wrapper, ...options})
}



export {render}
export * from '@testing-library/react'