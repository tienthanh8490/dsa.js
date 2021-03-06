'use strict';

var Node = function(value, next){

	this.value = value || null;
	this.next = next || null;

	this.hasNext = function(){
		return this.next !== null;
	}

	this.getValue = function(){
		return this.value;
	}

	this.getNext = function(){
		return this.next;
	}

	this.setValue = function(value){
		this.value = value;
	}

	this.setNext = function(value){
		this.next = value;
	}
}

module.exports = Node;