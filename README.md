# study.multi-app-react-webpack-ssr

[hmu332233/simple-react-webpack-ssr](https://github.com/hmu332233/simple-react-webpack-ssr)를 기반으로 여러 개의 React App을 위한 구조를 연구합니다.

- [x] multi app 구조 셋팅
- [x] 앱별 분리된 webpack 설정
- [x] 분리된 앱에 모노레포 구조 적용
- [ ] 모노레포 구조에 모노레포 전문 도구 적용
- [ ] 모노레포 구조에 앱 통합 HMR 적용
- [ ] (번외) 특정 앱에 대해서 다른 번들러 또는 nextjs 적용
- [ ] (번외) pnpm workspace -> npm workspace로 변경

### branch

이 레포는 아래와 같은 순서로 변경되었습니다.

```
1-basic: webpack config 하나 / 분리된 entry로 multi app 구조
2-multi-webpack-setup: 각 앱별로 webpack config 분리된 구조
3-monorepo-setup: 각 앱별로 모노레포 구조 적용
```
