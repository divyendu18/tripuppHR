import React, { Component } from 'react';
import './Success.css';

class Success extends Component {
    render() {
        return (
            <div className="container-fluid success">
                <h3 className="mt-5 p-5">Let Success Make Noise...</h3>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="cardSuccess mt-5 mb-5">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMxIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEzMSAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZD0iTTExMC40MDIgMjQuMzA1NVYyOC41NTg0SDg2Ljc4NTJWMTQuMDAzOUgxMDAuMTQyQzEwMC41NjQgMTQuMDAzOSAxMDAuOTgyIDE0LjAzMTEgMTAxLjM5MyAxNC4wODE3QzEwMS40NTkgMTQuMDg5NCAxMDEuNTI0IDE0LjA5NzIgMTAxLjU5IDE0LjExMjhDMTA2LjUxMSAxNC44MDQ3IDExMC4zMDUgMTguOTk5MiAxMTAuMzk4IDI0LjEwNzNDMTEwLjQwMiAyNC4xNzM0IDExMC40MDIgMjQuMjM5NSAxMTAuNDAyIDI0LjMwNTVaIiBmaWxsPSIjRkZCRDNFIi8+CjxwYXRoIGQ9Ik0xMDEuNDk4IDE0LjAwMzlMMTAxLjU5MSAxNC4xMTI4QzEwMS41MjUgMTQuMDk3MiAxMDEuNDU5IDE0LjA4OTQgMTAxLjM5MyAxNC4wODE3QzEwMC45ODMgMTQuMDMxMSAxMDAuNTY1IDE0LjAwMzkgMTAwLjE0MyAxNC4wMDM5SDEwMS40OThaIiBmaWxsPSIjRkY3ODFEIi8+CjxwYXRoIGQ9Ik0xMTAuNDAyIDI0LjExMTFWMjQuMzA1NEMxMTAuNDAyIDI0LjIzOTMgMTEwLjQwMiAyNC4xNzMzIDExMC4zOTggMjQuMTA3MkwxMTAuNDAyIDI0LjExMTFaIiBmaWxsPSIjRkY3ODFEIi8+CjxwYXRoIGQ9Ik00NC45ODgzIDE0VjE0LjA0MjhDNDUuMzM2NyAxNC4wMTU1IDQ1LjY5MjkgMTQgNDYuMDQ5MSAxNEg0NC45ODgzWiIgZmlsbD0iI0RDRENEQyIvPgo8cGF0aCBkPSJNODkuODgyOSAyNC4zMDU1Qzg5Ljg4MjkgMjQuNTQ2NSA4OS44OTA2IDI0Ljc4MzcgODkuOTA2MSAyNS4wMjA4Qzg5Ljk0NDggMjUuNTMzOSA4OS45NDQ4IDI2LjA0NzEgODkuOTI5MyAyNi41NjAyQzg5LjkyNTUgMjYuNzAwMiA4OS45MjE2IDI2Ljg0MDEgODkuOTIxNiAyNi45ODAxVjg0LjEwNTVDODkuMzk1IDg5LjA1ODEgODUuMjk1IDkzLjAxOTMgODAuMjkyOSA5My4yOTE1QzgwLjA5OTMgOTMuMzAzMSA3OS45MDk2IDkzLjMwNyA3OS43MTk5IDkzLjMwN0gzMy40NTRWOTMuMzAzMUMzMy4zOTIxIDkzLjMwNyAzMy4zMjYzIDkzLjMwNyAzMy4yNjA0IDkzLjMwN0MzMy4yMTQgOTMuMzA3IDMzLjE2MzYgOTMuMzA3IDMzLjExNzIgOTMuMzAzMVYyNi45ODAxQzMzLjExNzIgMjYuNjIyNCAzMy4xMzI3IDI2LjI2ODcgMzMuMTYzNiAyNS45MTg4QzMzLjY3MDggMTkuNTk3OSAzOC42OTIzIDE0LjU1NTkgNDQuOTg3NiAxNC4wNDI4QzQ1LjMzNiAxNC4wMTU1IDQ1LjY5MjIgMTQgNDYuMDQ4NCAxNEwxMDAuMTQzIDE0LjAwMzlDOTQuNDc0NiAxNC4wMDM5IDg5Ljg4MjkgMTguNjE0NCA4OS44ODI5IDI0LjMwNTVaIiBmaWxsPSIjRkZEQzk3Ii8+CjxwYXRoIGQ9Ik0zMy4xMTcyIDI1LjkxODdWMjYuOTgzOUMzMy4xMTcyIDI2LjYyNjIgMzMuMTMyNyAyNi4yNzI1IDMzLjE1OTggMjUuOTE4N0gzMy4xMTcyWiIgZmlsbD0iI0RDRENEQyIvPgo8cGF0aCBkPSJNMzMuNDUzNCA5My40NDMxVjkzLjQzOTJDMzMuMzkxNCA5My40NDMxIDMzLjMyNTYgOTMuNDQzMSAzMy4yNTk4IDkzLjQ0MzFDMzMuMjEzMyA5My40NDMxIDMzLjE2MyA5My40NDMxIDMzLjExNjUgOTMuNDM5MkMyNy41MTQzIDkzLjM2MTUgMjMgODguNzIzOCAyMyA4My4wMDkzQzIzIDgyLjk0MzIgMjMgODIuODc3MSAyMy4wMDM5IDgyLjgxMUg2OS40NjMzQzY5LjQ1OTQgODIuODczMiA2OS40NTk0IDgyLjkzOTMgNjkuNDU5NCA4My4wMDkzQzY5LjQ1OTQgODMuMTMzNyA2OS40NjMzIDgzLjI1ODEgNjkuNDY3MiA4My4zODI1QzY5LjQ3MSA4My40OTkxIDY5LjQ3NDkgODMuNjE5NiA2OS40ODY1IDgzLjczMjRDNjkuNDk0MyA4My44NDUxIDY5LjUwMiA4My45NjE3IDY5LjUxMzYgODQuMDc0NEM2OS41MjkxIDg0LjI0OTQgNjkuNTUyMyA4NC40MjA0IDY5LjU3OTUgODQuNTk1NEM2OS41Nzk1IDg0LjU5OTIgNjkuNTc5NSA4NC42MDMxIDY5LjU3OTUgODQuNjAzMUM2OS42MDI3IDg0Ljc2NjQgNjkuNjMzNyA4NC45Mjk3IDY5LjY2NDYgODUuMDkyOUM2OS42Njg1IDg1LjExMjQgNjkuNjcyNCA4NS4xMjc5IDY5LjY3NjIgODUuMTQzNUM2OS43MDcyIDg1LjMwNjggNjkuNzQyMSA4NS40NjIyIDY5Ljc4NDYgODUuNjE3N0M2OS44MTk1IDg1Ljc1NzcgNjkuODU4MiA4NS45MDE1IDY5LjkwMDggODYuMDM3NkM2OS45MTI0IDg2LjA4NDIgNjkuOTI3OSA4Ni4xMzA5IDY5Ljk0MzQgODYuMTc3NUM2OS45ODIxIDg2LjMwNTggNzAuMDI0NyA4Ni40MzQxIDcwLjA3MTEgODYuNTU4NUM3MC4wNzUgODYuNTc3OSA3MC4wODI4IDg2LjU5MzUgNzAuMDkwNSA4Ni42MTI5QzcwLjEyNTQgODYuNzA2MiA3MC4xNjAyIDg2LjgwMzQgNzAuMTk4OSA4Ni44OTI4QzcwLjIyOTkgODYuOTgyMiA3MC4yNjg2IDg3LjA3NTUgNzAuMzA3MyA4Ny4xNjQ5QzcwLjQyMzUgODcuNDQ0OCA3MC41NTUxIDg3LjcxMzEgNzAuNjk4MyA4Ny45ODEzQzcwLjg1NzEgODguMjc2NyA3MS4wMjc0IDg4LjU2NDQgNzEuMjEzMyA4OC44NDQzQzcxLjM3OTggODkuMDk3IDcxLjU1NzkgODkuMzQxOSA3MS43NDc2IDg5LjU3NTFDNzEuNzk0IDg5LjYzMzQgNzEuODQ0NCA4OS42OTU2IDcxLjg5ODYgODkuNzU3OEM3MS45NDg5IDg5LjgyMzkgNzIuMDA3IDg5Ljg5IDcyLjA2MTIgODkuOTU2MUM3Mi4xMTU0IDkwLjAxNDQgNzIuMTY1NyA5MC4wNzI3IDcyLjIxOTkgOTAuMTMxQzcyLjM3MDkgOTAuMzAyMSA3Mi41Mjk2IDkwLjQ2MTUgNzIuNjkyMiA5MC42MTdDNzIuNzYxOSA5MC42ODY5IDcyLjgzNTUgOTAuNzQ5MSA3Mi45MDkgOTAuODE5MUM3My4wNjM5IDkwLjk1OSA3My4yMjY1IDkxLjA5OSA3My4zOTMgOTEuMjI3M0M3My40NzgyIDkxLjI5NzIgNzMuNTY3MiA5MS4zNjcyIDczLjY1NjMgOTEuNDMzM0M3My43NzYzIDkxLjUyMjcgNzMuOTAwMiA5MS42MTIxIDc0LjAyNDEgOTEuNjk3NkM3NC4xNTE4IDkxLjc4MzIgNzQuMjc5NiA5MS44Njg3IDc0LjQwNzQgOTEuOTQ2NEM3NC42NjY4IDkyLjEwNTggNzQuOTMgOTIuMjUzNSA3NS4yMDQ5IDkyLjM4NTdDNzUuMzIxMSA5Mi40NDQgNzUuNDM3MiA5Mi41MDIzIDc1LjU1NzIgOTIuNTUyOUM3NS41ODQzIDkyLjU2ODQgNzUuNjE1MyA5Mi41ODAxIDc1LjY0MjQgOTIuNTkxOEM3NS43MTIxIDkyLjYyNjcgNzUuNzg1NyA5Mi42NTc4IDc1Ljg1OTIgOTIuNjg1MUM3NS45Njc2IDkyLjczMTcgNzYuMDc2IDkyLjc3MDYgNzYuMTg0NCA5Mi44MDk0Qzc2LjE5MjIgOTIuODEzMyA3Ni4xOTk5IDkyLjgxNzIgNzYuMjExNSA5Mi44MjExQzc2LjMzOTMgOTIuODY3OCA3Ni40NjcxIDkyLjkxNDQgNzYuNTk0OCA5Mi45NTMzQzc2LjcyMjYgOTIuOTk2IDc2Ljg1NDIgOTMuMDM0OSA3Ni45ODk3IDkzLjA2OTlDNzcuMDkwNCA5My4wOTcxIDc3LjE5MTEgOTMuMTI0MyA3Ny4yOTE3IDkzLjE0NzdDNzcuMzc2OSA5My4xNzEgNzcuNDY1OSA5My4xOTA0IDc3LjU1NSA5My4yMDZDNzcuNjAxNCA5My4yMjE1IDc3LjY1MTggOTMuMjI5MyA3Ny42OTgyIDkzLjIzNzFDNzcuNzc5NSA5My4yNTY1IDc3Ljg2MDggOTMuMjcyIDc3Ljk0NiA5My4yODM3Qzc4LjA1ODMgOTMuMzA3IDc4LjE3NDQgOTMuMzIyNiA3OC4yOTA2IDkzLjMzODFDNzguNDE0NSA5My4zNTc2IDc4LjU0MjIgOTMuMzczMSA3OC42NyA5My4zODQ4Qzc4Ljc4MjMgOTMuMzk2NSA3OC44OTg0IDkzLjQwODEgNzkuMDE0NiA5My40MTJDNzkuMDg4MSA5My40MTk4IDc5LjE2MTcgOTMuNDIzNyA3OS4yMzkxIDkzLjQyNzZDNzkuMzk3OSA5My40MzUzIDc5LjU1NjYgOTMuNDM5MiA3OS43MTkyIDkzLjQzOTJIMzMuNDUzNFY5My40NDMxWiIgZmlsbD0iI0ZGQkQzRSIvPgo8cGF0aCBkPSJNNzkuODE2NiA4NC4zNjk5Qzc5Ljc1NDcgODQuMzY2IDc5LjY4ODkgODQuMzY2IDc5LjYyMyA4NC4zNjZINzkuODE2NlY4NC4zNjk5WiIgZmlsbD0iI0YwRjBGMCIvPgo8cmVjdCB4PSIzOC4xNjIxIiB5PSIzOC45NzE5IiB3aWR0aD0iNDYuMzc2NSIgaGVpZ2h0PSI1IiByeD0iMi41IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzOC4xNjIxIiB5PSI0OC45NzE5IiB3aWR0aD0iNDYuMzc2NSIgaGVpZ2h0PSI1IiByeD0iMi41IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIzOC4xNjIxIiB5PSI1OC45NzE5IiB3aWR0aD0iMzIuMTA2OCIgaGVpZ2h0PSI1IiByeD0iMi41IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzUgNDdDNDMuMjg0MyA0NyA1MCA0MC4yODQzIDUwIDMyQzUwIDIzLjcxNTcgNDMuMjg0MyAxNyAzNSAxN0MyNi43MTU3IDE3IDIwIDIzLjcxNTcgMjAgMzJDMjAgNDAuMjg0MyAyNi43MTU3IDQ3IDM1IDQ3WiIgZmlsbD0iIzQ0Qjk4MCIvPgo8cGF0aCBkPSJNMjguNTEzNyAzMS45MDAzTDMzLjMwMyAzNi42ODk3TDQxLjgxNzQgMjguMTc1MyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTMwLjQwMiIgaGVpZ2h0PSIxMTkuNDQzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iNiIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMC45MDc0NTIgMCAwIDAgMCAwLjcyNSAwIDAgMCAwLjggMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="" />
                            <p style={{fontSize:"2em"}}>Score Card</p>
                        </div>
                        
                    </div>
                    <div className="col-xs-12 col-md-4">
                    <div className="cardSuccess mt-5 mb-5">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZD0iTTgwLjUzNjggNjJINTEuMTEzMkM0OS42MTc3IDYyIDQ4LjI1MjIgNjEuNDgwNCA0Ny4xNDY4IDYwLjYzNkw0MS4wMDIgNTQuNTk1NEw0NC41NzgzIDUwLjkyNTZWMjYuMDgxMkM0NC41NzgzIDIyLjUwODggNDcuNTA0NCAxOS41ODU5IDUxLjA4MDcgMTkuNTg1OUg3NS4xMDcyTDc5LjA3MzcgMTUuNDkzOUw4NC42MDA4IDIxLjAxNDlDODYuMDYzOCAyMi4yMTY1IDg3LjAwNjcgMjQuMDM1MiA4Ny4wMDY3IDI2LjA0ODdWNTUuNTA0N0M4Ny4wMzkyIDU5LjA3NzEgODQuMTQ1NiA2MiA4MC41MzY4IDYyWiIgZmlsbD0iI0ZGQkQzRSIvPgo8cGF0aCBkPSJNNzQuOTU4NSAxNEg0NS41MDI0QzQxLjkyNjEgMTQgMzkgMTYuOTIyOCAzOSAyMC40OTUyVjQ5Ljg4NjNDMzkgNTMuNDU4NyA0MS45MjYxIDU2LjM4MTYgNDUuNTAyNCA1Ni4zODE2SDc0Ljk1ODVDNzguNTM0OCA1Ni4zODE2IDgxLjQ2MDkgNTMuNDU4NyA4MS40NjA5IDQ5Ljg4NjNWMjAuNDYyOEM4MS40NjA5IDE2Ljg5MDQgNzguNTM0OCAxNCA3NC45NTg1IDE0WiIgZmlsbD0iI0ZGREM5NyIvPgo8cGF0aCBkPSJNNzAuNTA3NSAyMC43MjE1SDUwLjQ2MDVDNDguMDI2NiAyMC43MjE1IDQ2LjAzNTIgMjIuNzE0MiA0Ni4wMzUyIDI1LjE0OThWNDUuMTg4QzQ2LjAzNTIgNDcuNjIzNiA0OC4wMjY2IDQ5LjYxNjMgNTAuNDYwNSA0OS42MTYzSDcwLjUwNzVDNzIuOTQxNCA0OS42MTYzIDc0LjkzMjkgNDcuNjIzNiA3NC45MzI5IDQ1LjE4OFYyNS4xMjc2Qzc0LjkzMjkgMjIuNjkyMSA3Mi45NDE0IDIwLjcyMTUgNzAuNTA3NSAyMC43MjE1WiIgZmlsbD0iIzFFNkNEMCIvPgo8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjQ2IiB5PSIyMCIgd2lkdGg9IjI5IiBoZWlnaHQ9IjMwIj4KPHBhdGggZD0iTTcwLjUwNzUgMjAuNzIxNUg1MC40NjA1QzQ4LjAyNjYgMjAuNzIxNSA0Ni4wMzUyIDIyLjcxNDIgNDYuMDM1MiAyNS4xNDk4VjQ1LjE4OEM0Ni4wMzUyIDQ3LjYyMzYgNDguMDI2NiA0OS42MTYzIDUwLjQ2MDUgNDkuNjE2M0g3MC41MDc1QzcyLjk0MTQgNDkuNjE2MyA3NC45MzI5IDQ3LjYyMzYgNzQuOTMyOSA0NS4xODhWMjUuMTI3NkM3NC45MzI5IDIyLjY5MjEgNzIuOTQxNCAyMC43MjE1IDcwLjUwNzUgMjAuNzIxNVoiIGZpbGw9IiMyMjdBRUIiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxwYXRoIGQ9Ik03NC42MzY0IDI0Ljg0OTVINTQuNTg5NEM1Mi4xNTU1IDI0Ljg0OTUgNTAuMTY0MSAyNi44NDIzIDUwLjE2NDEgMjkuMjc3OFY0OS4zMTYxQzUwLjE2NDEgNTEuNzUxNiA1Mi4xNTU1IDUzLjc0NDQgNTQuNTg5NCA1My43NDQ0SDc0LjYzNjRDNzcuMDcwMyA1My43NDQ0IDc5LjA2MTggNTEuNzUxNiA3OS4wNjE4IDQ5LjMxNjFWMjkuMjU1N0M3OS4wNjE4IDI2LjgyMDEgNzcuMDcwMyAyNC44NDk1IDc0LjYzNjQgMjQuODQ5NVoiIGZpbGw9IiMyMjdBRUIiLz4KPC9nPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTYyLjQwNzYgNzcuNzIyNkM2MS44NzY5IDc3LjE0MzcgNjEuMzQ2MiA3Ni42MTMxIDYwLjc2NzMgNzYuMDgyNEw1Ni40NzM0IDcxLjc4OUw1NS42NTMyIDcyLjY1NzNDNTIuODA2NyA3MS4yNTgzIDQ5LjYyMjQgNzAuNDg2NSA0Ni4yNDUyIDcwLjQ4NjVDMzQuMjMyIDcwLjQ4NjUgMjQuNDg2MyA4MC4yMzEyIDI0LjQ4NjMgOTIuMjQzMkMyNC40ODYzIDk1Ljg2MTMgMjUuMzU0OCA5OS4yMzgyIDI2Ljk0NjkgMTAyLjIyOUwyNi4yMjMyIDEwMi45NTNMMzAuODA2NSAxMDcuNTM2QzMwLjg1NDggMTA3LjU4NCAzMC45MDMgMTA3LjYzMiAzMC45NTEzIDEwNy42OEwzMS45NjQ0IDEwOC42OTNMMzIuMDEyNyAxMDguNjQ1QzM1LjgyNDEgMTExLjk3NCA0MC43OTM0IDExMy45NTIgNDYuMjQ1MiAxMTMuOTUyQzU4LjI1ODUgMTEzLjk1MiA2OC4wMDQxIDEwNC4yMDcgNjguMDA0MSA5Mi4xOTVDNjguMDA0MSA4Ni42NDczIDY1Ljg4MTMgODEuNTgxOSA2Mi40MDc2IDc3LjcyMjZaIiBmaWxsPSIjRkZCRDNFIi8+CjxwYXRoIGQ9Ik00MS43NTg5IDEwOS41MTRDNTMuNzc2IDEwOS41MTQgNjMuNTE3OCA5OS43NzI3IDYzLjUxNzggODcuNzU2OEM2My41MTc4IDc1Ljc0MDggNTMuNzc2IDY2IDQxLjc1ODkgNjZDMjkuNzQxOCA2NiAyMCA3NS43NDA4IDIwIDg3Ljc1NjhDMjAgOTkuNzcyNyAyOS43NDE4IDEwOS41MTQgNDEuNzU4OSAxMDkuNTE0WiIgZmlsbD0iI0ZGREM5NyIvPgo8cGF0aCBkPSJNNDEuNDQ3NiAxMDIuNzY2QzQ5LjkwOSAxMDIuNzY2IDU2Ljc2ODMgOTUuOTA3NCA1Ni43NjgzIDg3LjQ0NjhDNTYuNzY4MyA3OC45ODYzIDQ5LjkwOSA3Mi4xMjc3IDQxLjQ0NzYgNzIuMTI3N0MzMi45ODYyIDcyLjEyNzcgMjYuMTI3IDc4Ljk4NjMgMjYuMTI3IDg3LjQ0NjhDMjYuMTI3IDk1LjkwNzQgMzIuOTg2MiAxMDIuNzY2IDQxLjQ0NzYgMTAyLjc2NloiIGZpbGw9IiM3QTUxRDIiLz4KPG1hc2sgaWQ9Im1hc2sxIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIyNiIgeT0iNzIiIHdpZHRoPSIzMSIgaGVpZ2h0PSIzMSI+CjxwYXRoIGQ9Ik00MS40NDk2IDEwMi43NjZDNDkuOTEwOSAxMDIuNzY2IDU2Ljc3MDIgOTUuOTA3NCA1Ni43NzAyIDg3LjQ0NjhDNTYuNzcwMiA3OC45ODYzIDQ5LjkxMDkgNzIuMTI3NyA0MS40NDk2IDcyLjEyNzdDMzIuOTg4MiA3Mi4xMjc3IDI2LjEyODkgNzguOTg2MyAyNi4xMjg5IDg3LjQ0NjhDMjYuMTI4OSA5NS45MDc0IDMyLjk4ODIgMTAyLjc2NiA0MS40NDk2IDEwMi43NjZaIiBmaWxsPSIjOEQ2NkRGIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMSkiPgo8cGF0aCBkPSJNNDUuNTMzNSAxMDYuODUxQzUzLjk5NDkgMTA2Ljg1MSA2MC44NTQyIDk5Ljk5MjUgNjAuODU0MiA5MS41MzE5QzYwLjg1NDIgODMuMDcxNCA1My45OTQ5IDc2LjIxMjggNDUuNTMzNSA3Ni4yMTI4QzM3LjA3MjIgNzYuMjEyOCAzMC4yMTI5IDgzLjA3MTQgMzAuMjEyOSA5MS41MzE5QzMwLjIxMjkgOTkuOTkyNSAzNy4wNzIyIDEwNi44NTEgNDUuNTMzNSAxMDYuODUxWiIgZmlsbD0iIzhENjZERiIvPgo8L2c+CjwvZz4KPHBhdGggZD0iTTExOC4xOTYgNDkuNzcwNEwxMTMuNzE4IDQ1LjIyNTFMNzMuNDE5OSA4NS45MzkxTDc4LjI1MTggOTAuNzc0NUM3OS4wMjQ5IDkxLjUxNTkgODAuMDg4IDkxLjk5OTQgODEuMzc2NSA5MS45OTk0TDExNS40OSA5MS45OTk0QzExNy45NyA5MS45OTk0IDEyMCA4OS45Njg2IDEyMCA4Ny40ODY0TDEyMCA1My4zNDg2QzExOS45NjcgNTEuODAxMiAxMTkuMjU5IDUwLjU3NjMgMTE4LjE5NiA0OS43NzA0WiIgZmlsbD0iI0ZGQkQzRSIvPgo8cGF0aCBkPSJNMTA3LjQ0IDQ1LjMyMjVMNzMuMzI3IDc5LjQ2MDNDNzAuNDkyMyA4Mi4yOTcxIDcyLjQ4OTUgODcuMTY0NyA3Ni41MTYxIDg3LjE2NDdMMTEwLjYyOSA4Ny4xNjQ3QzExMy4xMSA4Ny4xNjQ3IDExNS4xMzkgODUuMTMzOSAxMTUuMTM5IDgyLjY1MTdMMTE1LjEzOSA0OC41MTM4QzExNS4xMzkgNDQuNTE2NiAxMTAuMjc1IDQyLjQ4NTcgMTA3LjQ0IDQ1LjMyMjVaIiBmaWxsPSIjRkZEQzk3Ii8+CjxwYXRoIGQ9Ik0xMDQuNjU0IDU1LjMzNjhMODIuMzk2NCA3Ny41OTUzQzgwLjU0NjkgNzkuNDQ0OSA4MS44NDk5IDgyLjYxODcgODQuNDc3MSA4Mi42MTg3TDEwNi43MzQgODIuNjE4N0MxMDguMzUzIDgyLjYxODcgMTA5LjY3NyA4MS4yOTQ2IDEwOS42NzcgNzkuNjc2MUwxMDkuNjc3IDU3LjQxNzZDMTA5LjY3NyA1NC44MTEzIDEwNi41MDMgNTMuNDg3MiAxMDQuNjU0IDU1LjMzNjhaIiBmaWxsPSIjNDRCOTgwIi8+CjxwYXRoIGQ9Ik0xMDQuNjU0IDU1LjMzNjhMODIuMzk2NCA3Ny41OTUzQzgwLjU0NjkgNzkuNDQ0OSA4MS44NDk5IDgyLjYxODcgODQuNDc3MSA4Mi42MTg3TDEwOS42NzcgNTcuNDE3NkMxMDkuNjc3IDU0LjgxMTMgMTA2LjUwMyA1My40ODcyIDEwNC42NTQgNTUuMzM2OFoiIGZpbGw9IiMxRkE0NjMiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjYiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDAuOTA3NDUyIDAgMCAwIDAgMC43MjUgMCAwIDAgMC44IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNDguMDA0NyIgaGVpZ2h0PSI
                            0OCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDY2KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="" />
                        <p style={{fontSize:"2em"}}>Competency</p>
                        </div>
                        
                    </div>
                    <div className="col-xs-12 col-md-4">
                    <div className="cardSuccess mt-5 mb-5">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyMCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZD0iTTIwLjE2NDEgNjMuNDM4MlY2OC42OTI5QzIwLjE2NDEgODEuMDA5MyAyNS43OTE2IDg4LjkzMjkgMzIuMDI5IDkzLjk2NTJDMzguNTcxMyA5OS4yMTk4IDQ2Ljc0OTMgMTAyIDU1LjEyMTMgMTAySDYwLjAwMDNINjQuODc5M0M3My4yNTEzIDEwMiA4MS40NTcgOTkuMjQ3NiA4Ny45NzE2IDkzLjk2NTJDOTQuMjA5IDg4LjkzMjkgOTkuODM2NSA4MC45ODE1IDk5LjgzNjUgNjguNjkyOVY2My40MzgySDIwLjE2NDFaIiBmaWxsPSIjRkZCRDNFIi8+CjxwYXRoIGQ9Ik04OC4wODI1IDE0QzY4LjUzMTggMTQgNTAuNzg1OCAxNCAzMS44OTA0IDE0QzI1LjQwMzUgMTQgMjAuMTY0MSAxOS4yNTc5IDIwLjE2NDEgMjUuNzY3NlY2Mi43Mzk3QzIwLjE2NDEgNzUuMDYzNyAyNS43OTE2IDgyLjk5MjMgMzIuMDI5IDg4LjAyNzZDMzguNTcxMyA5My4yODU1IDQ2Ljc0OTMgOTYuMDY3NCA1NS4xMjEzIDk2LjA2NzRINjAuMDAwM0g2NC44NzkzQzczLjI1MTMgOTYuMDY3NCA4MS40NTcgOTMuMzEzMyA4Ny45NzE2IDg4LjAyNzZDOTQuMjA5IDgyLjk5MjMgOTkuODM2NSA3NS4wMzU5IDk5LjgzNjUgNjIuNzM5N1YyNS43Njc2Qzk5LjgwODggMTkuMjU3OSA5NC41Njk0IDE0IDg4LjA4MjUgMTRaIiBmaWxsPSIjRkZEQzk3Ii8+CjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMjAiIHk9IjE0IiB3aWR0aD0iODAiIGhlaWdodD0iODIiPgo8cGF0aCBkPSJNODguMTk3NiAxNEM2OC41NjY1IDE0IDUwLjc0NzYgMTQgMzEuNzc0NSAxNEMyNS4yNjEgMTQgMjAgMTkuMjMwMiAyMCAyNS43MDU2VjYyLjQ4MjlDMjAgNzQuNzQxOSAyNS42NTA3IDgyLjYyODcgMzEuOTEzNyA4Ny42Mzc1QzM4LjQ4MyA5Mi44Njc3IDQ2LjY5NDUgOTUuNjM1IDU1LjEwMDkgOTUuNjM1SDYwSDY0Ljg5OTFDNzMuMzA1NSA5NS42MzUgODEuNTQ0OSA5Mi44OTUzIDg4LjA4NjMgODcuNjM3NUM5NC4zNDkzIDgyLjYyODcgMTAwIDc0LjcxNDMgMTAwIDYyLjQ4MjlWMjUuNzA1NkM5OS45NzIyIDE5LjIzMDIgOTQuNzExMiAxNCA4OC4xOTc2IDE0WiIgZmlsbD0iI0ZGRDc4OSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggb3BhY2l0eT0iMC42IiBkPSJNMTAxLjAwMyAxOS4yNjQyTDgyLjEzODcgMzAuMjk1Nkw4NC4zNTc5IDUxLjI1NTNMMTAxLjAwMyA0MS4zMjdWMTkuMjY0MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTM0Ljk4MDkgNTIuMzU4NEwxNi42NzE5IDY0LjQ5M0wxOC4zMzYzIDg0LjM0OTZMMzQuOTgwOSA3NC40MjEzVjUyLjM1ODRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxwYXRoIGQ9Ik04NS45NDc1IDIyLjg5ODlDNjcuOTI5NiAyMi44OTg5IDUxLjcyNjcgMjIuODk4OSAzNC4wNzk4IDIyLjg5ODlDMzEuMzU1OCAyMi44OTg5IDI5LjEyNyAyNS4xMzUxIDI5LjEyNyAyNy44NjgyVjYxLjMyODJDMjkuMTI3IDc0Ljc3MjkgMzcuNzM5NSA4MS41MDkxIDQ0LjIwNTcgODQuNjU2M0M0Ny42MTc3IDg2LjM0MDQgNTEuMzg3NCA4Ny4xNjg2IDU1LjE4NDYgODcuMTY4Nkg1OS45OTk5SDY0LjgxNTJDNjguNjEyNCA4Ny4xNjg2IDcyLjM4MjEgODYuMzQwNCA3NS43OTQxIDg0LjY1NjNDODIuMjYwNCA4MS40ODE1IDkwLjg3MjkgNzQuNzQ1MyA5MC44NzI5IDYxLjMyODJWMjcuODY4MkM5MC45MDA0IDI1LjEzNTEgODguNjcxNiAyMi44OTg5IDg1Ljk0NzUgMjIuODk4OVoiIGZpbGw9IiM3QTUxRDIiLz4KPG1hc2sgaWQ9Im1hc2sxIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIyOSIgeT0iMjgiIHdpZHRoPSI2MiIgaGVpZ2h0PSI2MSI+CjxwYXRoIGQ9Ik04Ni4wNTQxIDI4QzY3Ljk2MjEgMjggNTEuNjkyNiAyOCAzMy45NzMyIDI4QzMxLjIzOCAyOCAyOSAzMC4yMzc0IDI5IDMyLjk3MTlWNjMuMTQ2MUMyOSA3Ni41OTc5IDM3LjY0NzkgODMuMzM3NiA0NC4xNDA4IDg2LjQ4NjRDNDcuNTY2OCA4OC4xNzEzIDUxLjM1MiA4OSA1NS4xNjQ4IDg5SDU5Ljk5OTlINjQuODM1QzY4LjY0NzggODkgNzIuNDMzIDg4LjE3MTMgNzUuODU5IDg2LjQ4NjRDODIuMzUxOCA4My4zMDk5IDkwLjk5OTcgNzYuNTcwMiA5MC45OTk3IDYzLjE0NjFWMzIuOTcxOUM5MS4wMjc0IDMwLjIzNzQgODguNzg5NCAyOCA4Ni4wNTQxIDI4WiIgZmlsbD0iIzRDNkRGNiIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazEpIj4KPGVsbGlwc2UgY3g9IjU5Ljk0OTQiIGN5PSI1NS43NzExIiByeD0iNDIuMTY2MiIgcnk9IjQxLjkxOTQiIGZpbGw9IiM4RTY2REYiLz4KPC9nPgo8cGF0aCBkPSJNNTguMDk4MSA0MS44NDdDNTguNjk3MiA0MC4wMDUyIDYxLjMwMjggNDAuMDA1MiA2MS45MDE5IDQxLjg0N0w2NC43MjE0IDUwLjUxNDdINzMuODM5MUM3NS43NzcxIDUwLjUxNDcgNzYuNTgyMyA1Mi45OTUxIDc1LjAxMzggNTQuMTMzNEw2Ny42MzkzIDU5LjQ4NTNMNzAuNDU3MyA2OC4xNDg1QzcxLjA1NjUgNjkuOTkwOCA2OC45NDg1IDcxLjUyMzcgNjcuMzgwNyA3MC4zODU4TDYwIDY1LjAyOTRMNTIuNjE5MyA3MC4zODU4QzUxLjA1MTUgNzEuNTIzNyA0OC45NDM1IDY5Ljk5MDggNDkuNTQyNyA2OC4xNDg1TDUyLjM2MDcgNTkuNDg1M0w0NC45ODYyIDU0LjEzMzRDNDMuNDE3NyA1Mi45OTUxIDQ0LjIyMjkgNTAuNTE0NyA0Ni4xNjA5IDUwLjUxNDdINTUuMjc4Nkw1OC4wOTgxIDQxLjg0N1oiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSI2Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAwLjkwNzQ1MiAwIDAgMCAwIDAuNzI1IDAgMCAwIDAuOCAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="" />
                            <p style={{fontSize:"2em"}}>Self-assurance</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Success;