/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package service.interfaces;

import entities.Department;
import jakarta.ejb.Local;

/**
 * @author steph18
 */
@Local
public interface DepartmentServiceLocal extends GenericServiceLocal<Department, Integer> {
}
