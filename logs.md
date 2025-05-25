


## 테스트 설정 관련
sudo chown -R $(whoami) $(brew --prefix)/* #brew sudo error

## git setup
git config --global core.editor "nano"

rm -f .git/index.lock

## 커스텀 도메인 설정

   # 루트 도메인 - A 레코드
   @    A    185.199.108.153
   @    A    185.199.109.153
   @    A    185.199.110.153
   @    A    185.199.111.153

   # www 서브도메인 - CNAME
   www    CNAME    tykim.github.io



   echo "www.tykim.me" > CNAME
   git add CNAME
   git commit -m "docs: CNAME 파일 수정"
   git push origin main

   # DNS 전파 확인
   dig www.tykim.me +noall +answer


## 오버리프 자동 다운로드
overleaf project
menu - git - generate token
share 에서 link share 되어있는지 확인

## 다른 방법
https://github.com/marketplace/actions/overleaf-sync-with-git


## git 관련 초기화
   git reset --hard HEAD

##




