package com.ifg.edu.pw.projetofinal.projetolocadora.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@ControllerAdvice
public class FilmeNotFoundAdvice {
	@ResponseBody
	@ExceptionHandler(FilmeNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	String filmeNotFoundHandler(FilmeNotFoundException ex) {
		return ex.getMessage();
	}
}
