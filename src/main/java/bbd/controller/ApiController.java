package bbd.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import bbd.domain.Car;
import bbd.domain.Cars;

@RestController
public class ApiController {
	
	@GetMapping("/api/move")
	public Cars moveCar() {
		Cars cars = IndexController.cars;
		
		cars.moveCars();
		return cars;
		
	}
}
