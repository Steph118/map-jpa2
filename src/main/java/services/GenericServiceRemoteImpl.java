/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services;

import dao.RepositoryDao;
import service.interfaces.GenericServiceRemote;

import java.io.Serializable;

/**
 *
 * @author steph18
 * @param <E>
 * @param <ID>
 */
public abstract class GenericServiceRemoteImpl<E extends Serializable, ID> implements GenericServiceRemote<E, ID> {

    protected abstract RepositoryDao<E, ID> getDAO();

}
