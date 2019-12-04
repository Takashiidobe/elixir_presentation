# Elixir Endpoint

Building and starting:

```
cd example_system
mix deps.get &&
pushd assets &&
npm install &&
popd &&
mix compile &&
iex -S mix phx.server
```

- Directions to debug your instance.

```
Process.list() will list all of the processes that the BEAM has spawned.


run Process.info(hd(Process.list())) to get info on the most intensive process.

Check for reductions (the amount of computations used)

run Runtime.top() to see the most CPU intensive processes.

let's grab the pid of the top most offender

pid = hd(Runtime.top()).pid

- Let's see what this is calling with Process.info

Process.info(pid, :current_stacktrace)

- and see the stack
Runtime.trace(pid)

- and kill the process
Process.exit(pid, :kill)

- and repeat
```

- `http://localhost:4000` to see the service
- `http://localhost:4000/load` to see the dashboard
- `http://localhost:4000/services` to see distribution in elixir

# Node Endpoint

- Put a number as a path parameter to see all the numbers summed up from 1 to number.
- visit `http://localhost:3000` to see the sum.
- visit `http://localhost:3000/status` to see the dashboard

```
  notice how this crashes immediately
```
