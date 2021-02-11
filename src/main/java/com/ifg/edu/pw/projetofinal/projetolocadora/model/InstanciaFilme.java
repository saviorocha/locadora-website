package com.ifg.edu.pw.projetofinal.projetolocadora.model;

import java.util.Calendar;  

import javax.persistence.*;
import org.springframework.data.annotation.Id;

/**
 * Modelo de instância de filme
 * @author savio
 *
 */
public class InstanciaFilme {
	@Id
	private String id;
	private Calendar data_entrega;
	private Filme filme;
	
	public InstanciaFilme() {}
	
	public InstanciaFilme(Calendar data_entrega, Filme filme) {
		this.data_entrega = data_entrega;
		this.filme = filme;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Calendar getData_entrega() {
		return data_entrega;
	}

	public void setData_entrega(Calendar data_entrega) {
		this.data_entrega = data_entrega;
	}
	
	public Filme getFilme() {
		return filme;
	}

	public void setFilme(Filme filme) {
		this.filme = filme;
	}

	@Override
	public String toString() {
		return "InstanciaFilme [id=" + id + ", data_entrega=" + data_entrega.getTime() + "]";
	}
	
	
}
