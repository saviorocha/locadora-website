package com.ifg.edu.pw.projetofinal.projetolocadora.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@ControllerAdvice
public class InstanciaFilmeNotFoundAdvice {
	@ResponseBody
	@ExceptionHandler(InstanciaFilmeNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	String instanciaFilmeNotFoundHandler(InstanciaFilmeNotFoundException ex) {
		return ex.getMessage();
	}
}
