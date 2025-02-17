package com.yancoding.springboot_backend.repository;

import com.yancoding.springboot_backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository  extends JpaRepository<Employee, Long>{
}
