package com.ifg.edu.pw.projetofinal.projetolocadora.controller;

public class InstanciaFilmeNotFoundException extends RuntimeException{
	public InstanciaFilmeNotFoundException(String id) {
		super("Não foi possível encontrar a instância com id " + id);
	}
}
