package com.ifg.edu.pw.projetofinal.projetolocadora.model;

import java.util.Arrays; 

import org.springframework.data.annotation.Id;

/**
 * Modelo de filme
 * @author savio
 *
 */
public class Filme {
	private @Id String id;
	private String titulo, sinopse;
	private String[] atores, diretores, genero;
	private int ano;	
	
	public Filme() {}

	public Filme(String titulo, String sinopse, String[] atores, String[] diretores, String[] genero, int ano) {
		this.titulo = titulo;
		this.genero = genero;
		this.sinopse = sinopse;
		this.atores = atores;
		this.diretores = diretores;
		this.ano = ano;
	}


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String[] getGenero() {
		return genero;
	}

	public void setGenero(String[] genero) {
		this.genero = genero;
	}

	public String getSinopse() {
		return sinopse;
	}

	public void setSinopse(String sinopse) {
		this.sinopse = sinopse;
	}

	public String[] getAtores() {
		return atores;
	}

	public void setAtores(String[] atores) {
		this.atores = atores;
	}

	public String[] getDiretores() {
		return diretores;
	}

	public void setDiretores(String[] diretores) {
		this.diretores = diretores;
	}

	public int getAno() {
		return ano;
	}

	public void setAno(int ano) {
		this.ano = ano;
	}

	@Override
	public String toString() {
		return "Filme [id=" + id + ", titulo=" + titulo + ", sinopse=" + sinopse + ", atores=" + Arrays.toString(atores)
				+ ", diretores=" + Arrays.toString(diretores) + ", genero=" + Arrays.toString(genero) + ", ano=" + ano
				+ "]";
	}
	
}
