package com.ifg.edu.pw.projetofinal.projetolocadora.controller;

public class FilmeNotFoundException extends RuntimeException{
	public FilmeNotFoundException(String id) {
		super("Não foi possível encontrar o filme com id " + id);
	}
}
