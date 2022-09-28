import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('http://localhost:8080/');
  check(res, {
    'response code was 200': (res) => res.status == 200,
    'body size was 8 bytes': (res) => res.body.length == 8,
  });
}