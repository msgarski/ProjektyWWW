<?php

namespace App\Controllers;

use App\Entities\Task;
use App\Models\TaskModel;

class Tasks extends BaseController
{
	private $model;

	public function __construct()
	{
		$this->model = new \App\Models\TaskModel;
		
	}

	private function getTaskOr404Error($id)
	{
		$zapytanie = $this->model->find($id);

		if($zapytanie === null)
		{
			throw new \CodeIgniter\Exceptions\PageNotFoundException(
				"Rekord z tym id = $id, nie istnieje w bazie danych"
			);
		}
		return $zapytanie;
	}

	public function index()
	{
		$data = $this->model->findAll();
		
		// I-szy argument to widok, którego to dotyczy, a drugi:
		// 'task' to kreaowana w widoku zmienna, a $data to przesyłane dane
		return view('Tasks/index', ['task'=>$data]);
	}

	public function show($id)
	{
		$zapytanie = $this->getTaskOr404Error($id);
		// 'task' to kreaowana zmienna, a $zapytanie to przesyłane dane
		return view('Tasks/show', [
			'task'=>$zapytanie
			]);
		//dd($task);
	}

	public function new()
	{
		$task = new Task;

		//return view('Tasks/new', $task);
		return view('Tasks/new', [
			'task'	=> $task
		]);
	}

	public function create()
	{
		$task = new Task($this->request->getPost());

		if($this->model->insert($task))
		{
			return redirect()->to("/tasks/show/{$this->model->insertID}")
							->with('info', 'Udało się zapisać rekord');
		}
		else
		{
			return redirect()->back()
							->with('errors', $this->model->errors())
							->with('warning', 'Niewłaściwe dane wprowadzono')
							->withInput();
		}

	}

	public function edit($id)
	{
		// funkcja find() dostosowuje się do wybranej w modelu tabeli
		$zapytanie = $this->getTaskOr404Error($id);

		// 'task' to kreaowana zmienna, a $zapytanie to przesyłane dane
		return view('Tasks/edit', [
			'task'=>$zapytanie
			]);
	}

	public function update($id)
	{
		//$model = new \App\Models\TaskModel;
		
		//$task = new Task($this->request->getPost())
		$task = $this->getTaskOr404Error($id);

		$task->fill($this->request->getPost());

		if(!$task->hasChanged())
		{
			return redirect()->back()
							->with('warning', 'Nic nie ma do odnowienia')
							->withInput();
		}
		
		if($this->model->save($task))
		{
			return redirect()->to("/tasks/show/$id")
							->with('info', 'Update successfully');
		}
		else{
			return redirect()->back()
							->with('errors', $this->model->errors())
							->with('warning', 'Invalid data!!!')
							->withInput();

		}
	}

	public function delete($id)
	{
		$task = $this->getTaskOr404Error($id);

		if($this->request->getMethod() === 'post')
		{
			$this->model->delete($id);

			return redirect()->to('/tasks')
							->with('info', 'Usunięto rekord');
		}

		return view('Tasks/delete', [
			'task'	=>	$task
		]);
	}

	
}
