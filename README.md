# ⚽ Connection — 스포츠 커뮤니티 플랫폼

> **스포츠를 좋아하는 사람들이 모여 경험을 나누고 함께하는 커뮤니티**
>
> 회원 관리, 자유게시판, 리그 게시판, 댓글, 파일 업로드 등 풀스택 기능을 갖춘 Spring Boot 웹 애플리케이션

---

## 📌 프로젝트 개요

### 서비스 개요

Connection은 스포츠 동호인들이 경험을 나누고, 팀을 찾고, 함께 할 사람들을 만나는 **스포츠 특화 커뮤니티 플랫폼**입니다.

- 📝 **자유게시판** — 스포츠 관련 글 공유, 팁 교환
- 🏆 **리그게시판** — 스포츠 리그 정보 공유
- 💬 **댓글 시스템** — 실시간 상호 작용
- 📁 **파일 업로드** — 게시글에 이미지/파일 첨부
- 🔔 **공지사항** — 플랫폼 소식 전달
- 📍 **장소 찾기** — 스포츠 시설 검색

### 기술적 특징

- **Spring Boot 3** 기반 모던 웹 애플리케이션
- **MyBatis ORM** 으로 Oracle DB와 연동
- **Thymeleaf** 서버사이드 렌더링
- **REST API** 기반 댓글 시스템
- **세션 기반** 사용자 인증
- **페이징 처리** 로 효율적인 데이터 관리

---

## 🛠️ 기술 스택

### Backend
![Java](https://img.shields.io/badge/Java_17-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.2.5-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![MyBatis](https://img.shields.io/badge/MyBatis-000000?style=flat-square)

### Frontend
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=flat-square&logo=thymeleaf&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

### Database
![Oracle](https://img.shields.io/badge/Oracle_DB-F80000?style=flat-square&logo=oracle&logoColor=white)

### Build & Others
![Gradle](https://img.shields.io/badge/Gradle-02303A?style=flat-square&logo=gradle&logoColor=white)
![Lombok](https://img.shields.io/badge/Lombok-CA0000?style=flat-square)

---

## 🎯 핵심 기능

### 1️⃣ 👤 회원 관리

#### 회원가입
- 이름, 이메일, 비밀번호, 닉네임, 성별, 생년월일 입력
- 이메일 중복 검증
- 비밀번호 암호화 저장 (Spring Security 또는 SHA)

#### 로그인 / 로그아웃
- 세션 기반 인증
- 로그인 유지 기능 (Remember-me)
- 로그아웃 시 세션 자동 만료

#### 마이페이지
- 내 정보 조회
- 작성한 게시글 목록
- 인기 게시글 확인
- 내 댓글 이력

#### 회원정보 수정
- 이름, 닉네임, 성별, 생년월일 수정
- 비밀번호 변경
- 프로필 이미지 업로드

#### 회원 탈퇴
- 회원 탈퇴 처리
- 탈퇴 후 세션 자동 만료
- 개인정보 삭제 (GDPR 준수)

---

### 2️⃣ 📋 자유게시판

#### 게시글 목록
- **페이징 처리** — 한 페이지당 10~20개 게시글 표시
- **정렬 기능** — 최신순, 인기순(조회수), 댓글순
- **카테고리 필터** — 축구, 농구, 테니스 등 스포츠별 필터링
- **검색 기능** — 제목, 내용, 작성자 기반 검색

#### 게시글 작성
- 로그인 필수
- 스포츠 카테고리 선택 (필수)
- 제목, 내용 입력
- **파일 첨부 가능** (이미지, PDF 등)
- 작성 시 자동으로 작성자 정보 기록

#### 게시글 상세 조회
- **조회수 자동 증가** (중복 제거 로직 포함)
- 첨부 파일 조회 및 다운로드
- 댓글 목록 표시
- 작성자 정보 표시 (프로필 이미지, 닉네임)

#### 게시글 수정 / 삭제
- **작성자 본인만 수정/삭제 가능**
- 수정 시 수정 일시 기록
- 삭제 시 관련 댓글, 파일도 함께 삭제 (CASCADE)

#### 댓글 시스템 (REST API)
- **댓글 작성** — AJAX POST 요청
- **댓글 조회** — 페이징 처리 (한 페이지당 10개)
- **댓글 삭제** — 댓글 작성자만 삭제 가능
- **실시간 업데이트** — 페이지 새로고침 없이 댓글 추가/삭제

---

### 3️⃣ 🏆 리그 게시판

#### 게시글 목록
- **페이징 처리**
- 리그별 필터링

#### 게시글 작성
- 로그인 필수
- 리그 카테고리 선택 (필수)
- 리그 정보 상세 작성

#### 게시글 상세 조회
- 리그 상세 정보 표시
- 참가 팀 목록
- 리그 일정

#### 게시글 수정 / 삭제
- 작성자 본인만 가능

---

### 4️⃣ 📂 파일 업로드 시스템

#### 파일 업로드
- 게시글 작성/수정 시 **다중 파일 첨부 가능**
- 지원 포맷: JPG, PNG, GIF, PDF, DOC, DOCX 등

#### 파일 관리
- **UUID 기반 서버 저장명 생성** — 파일명 충돌 방지
- **날짜별 폴더 구조** — `/uploads/yyyy/MM/dd/` 자동 생성
- 원본 파일명과 서버 저장명 분리 저장

#### 파일 조회 / 다운로드
- **REST API** (`/v1/files`, `/v1/boards/{id}/files`)
- 게시글별 첨부 파일 목록 조회
- 이미지 파일은 인라인 표시, 기타 파일은 다운로드

---

### 5️⃣ 📢 공지사항

#### 공지사항 페이지
- **4개 카테고리** (플랫폼 소식, 이벤트, 공지, 기타)
- 관리자 전용 작성
- 공지사항 상세 조회

---

### 6️⃣ 🔧 관리자 페이지

#### 게시글 관리
- 전체 게시글 조회 및 삭제 권한
- 부적절한 게시글 삭제

#### 리그 관리
- 리그 상세 정보 관리
- 리그별 참가 팀 관리

#### 공지사항 작성
- **Summernote WYSIWYG 에디터** 사용
- 리치 텍스트 편집 지원
- 이미지 삽입 가능

---

### 7️⃣ 📍 장소 찾기

- 스포츠 관련 시설 검색 기능
- 축구장, 농구장, 테니스 코트 등 검색
- 지도 기반 검색 (Kakao Maps API)

---

## 🗄️ 데이터베이스 스키마

### 핵심 테이블

| 테이블명 | 설명 | 주요 컬럼 |
|---------|------|---------|
| **CNN_MEMBER** | 회원 정보 | 번호, 이름, 이메일, 비밀번호, 닉네임, 성별, 생년월일 |
| **자유게시판** | 자유게시판 글 | 번호, 제목, 내용, 작성일, 스포츠/게시 카테고리, 조회수, 회원번호 |
| **리그게시판** | 리그게시판 글 | 번호, 제목, 내용, 작성일, 카테고리, 회원번호 |
| **파일** | 첨부 파일 정보 | 번호, 원본명, 서버저장명, 확장자, 게시글번호 |
| **댓글** | 댓글 정보 | 번호, 내용, 작성일, 게시글번호, 회원번호 |
| **공지사항** | 공지사항 | 번호, 제목, 내용, 작성일, 카테고리 |

---

## ⚙️ 아키텍처

### 계층 구조

```
Controller (HTTP 요청 처리)
    ↓
Service (비즈니스 로직)
    ↓
Mapper (MyBatis)
    ↓
Oracle Database
```

### 프로젝트 구조

```
src/main/java/com/example/connection/
├── controller/                    # MVC Controller, REST API
│   ├── MemberController.java     # 회원 관리
│   ├── FreeboardController.java  # 자유게시판
│   ├── LeagueController.java     # 리그 게시판
│   ├── NoticeController.java     # 공지사항
│   ├── ReplyApi.java             # 댓글 REST API
│   └── FileApi.java              # 파일 REST API
│
├── service/                       # 비즈니스 로직 (트랜잭션)
│   ├── MemberService.java
│   ├── FreeboardService.java
│   ├── LeagueService.java
│   ├── ReplyService.java
│   └── FileService.java
│
├── mapper/                        # MyBatis Mapper 인터페이스
│   ├── MemberMapper.java
│   ├── FreeboardMapper.java
│   ├── LeagueMapper.java
│   ├── ReplyMapper.java
│   └── FileMapper.java
│
├── domain/
│   ├── dto/                       # 데이터 전송 객체
│   │   ├── MemberDTO.java
│   │   ├── FreeboardDTO.java
│   │   └── ReplyDTO.java
│   │
│   └── vo/                        # 도메인 객체
│       ├── Member.java
│       ├── Freeboard.java
│       └── Reply.java
│
├── config/                        # Spring 설정
│   └── WebConfig.java            # 인터셉터, 필터 설정
│
└── mybatis/                       # MyBatis 설정
    └── mapper/                    # XML Mapper 파일
        ├── MemberMapper.xml
        └── FreeboardMapper.xml
```

---

## 📝 내가 맡은 역할

### 1. 핵심 기능 구현 (전담)

#### 자유게시판 CRUD
- **MemberController** — 회원 관리 전체 (가입, 로그인, 마이페이지 등)
- **FreeboardController** — 게시글 목록, 작성, 상세, 수정, 삭제
- **FreeboardService** — 비즈니스 로직 (페이징, 조회수 증가, 검색)
- **FreeboardMapper.xml** — SQL 쿼리 작성 (조회, 삽입, 수정, 삭제)

#### 댓글 시스템
- **ReplyApi.java** — REST API 개발 (AJAX 기반)
  - POST `/v3/freeboard/{id}/reply` — 댓글 작성
  - GET `/v3/freeboard/{id}/replys` — 댓글 목록 조회
  - GET `/v4/freeboard/{id}/replys` — 댓글 페이징 조회
  - DELETE `/v3/freeboard/replys/{id}` — 댓글 삭제
- **ReplyService** — 댓글 비즈니스 로직
- **댓글 페이징 로직** — 한 페이지당 10개, 정렬 처리

#### 마이페이지
- 내 정보 조회
- 작성한 게시글 목록
- 인기 게시글 확인 (상단에 고정)

---

### 2. 기술적 의사결정

#### Spring Boot 3.2.5 선택 이유
| 이유 | 설명 |
|------|------|
| **최신 버전** | 최신 보안 패치, 성능 최적화 |
| **Virtual Threads** | Spring 6 기반으로 높은 동시성 처리 |
| **모던 스택** | 새로운 개발자들도 쉽게 이해 가능 |

#### MyBatis 선택 이유
| 이유 | 설명 |
|------|------|
| **SQL 제어** | 복잡한 쿼리를 직접 작성 가능 |
| **동적 SQL** | 조건부 쿼리를 유연하게 작성 |
| **성능** | JPA보다 가벼우면서도 강력한 기능 |

#### Thymeleaf 선택 이유
| 이유 | 설명 |
|------|------|
| **서버사이드 렌더링** | 초기 로딩 속도 빠름 |
| **자연스러운 문법** | HTML과 유사한 구문 |
| **Spring Integration** | Spring과의 완벽한 통합 |

---

## 🔧 기술적 구현 세부사항

### 1. 페이징 처리

```java
// FreeboardService.java
public Page<FreeboardDTO> getList(int page, int size) {
    int offset = (page - 1) * size;
    List<FreeboardDTO> list = freeboardMapper.selectList(offset, size);
    int total = freeboardMapper.countAll();
    return new Page<>(list, page, size, total);
}
```

**MyBatis XML:**
```xml
<!-- FreeboardMapper.xml -->
<select id="selectList" parameterType="map">
    SELECT * FROM FREEBOARD 
    ORDER BY CREATE_DATE DESC 
    LIMIT #{size} OFFSET #{offset}
</select>
```

### 2. 조회수 증가 (중복 제거)

```java
// FreeboardService.java
public FreeboardDTO getDetail(int id, HttpSession session) {
    String viewKey = "viewed_" + id;
    
    // 세션에 조회 기록 있으면 스킵
    if (session.getAttribute(viewKey) == null) {
        freeboardMapper.increaseViewCount(id);
        session.setAttribute(viewKey, true);
    }
    
    return freeboardMapper.selectById(id);
}
```

### 3. 댓글 페이징 REST API

```java
// ReplyApi.java
@GetMapping("/v4/freeboard/{id}/replys")
public ResponseEntity<Map<String, Object>> listReplyPage(
    @PathVariable int id,
    @RequestParam(defaultValue = "1") int page,
    @RequestParam(defaultValue = "10") int size
) {
    List<ReplyDTO> replies = replyService.getReplyList(id, page, size);
    int total = replyService.countReply(id);
    
    Map<String, Object> response = new HashMap<>();
    response.put("list", replies);
    response.put("total", total);
    response.put("page", page);
    
    return ResponseEntity.ok(response);
}
```

### 4. 파일 업로드 (UUID 기반)

```java
// FileService.java
public String uploadFile(MultipartFile file) throws IOException {
    // 원본 파일명 저장
    String originalName = file.getOriginalFilename();
    String extension = originalName.substring(originalName.lastIndexOf("."));
    
    // UUID로 서버 저장명 생성
    String serverName = UUID.randomUUID().toString() + extension;
    
    // 날짜별 폴더 생성 (yyyy/MM/dd)
    String datePath = new SimpleDateFormat("yyyy/MM/dd").format(new Date());
    String uploadPath = "/uploads/" + datePath + "/" + serverName;
    
    file.transferTo(new File(uploadPath));
    
    return uploadPath;
}
```

---

## 🐛 트러블슈팅

### 문제 1: 댓글 페이징 시 중복 조회

**증상**
- 댓글 페이지를 넘길 때마다 이전 댓글들이 중복으로 표시됨

**원인**
- 클라이언트에서 기존 댓글을 계속 누적하고 새로운 댓글만 append 했음

**해결**
```javascript
// 댓글 조회 전에 기존 목록 초기화
$('#replyContainer').empty();
$.ajax({
    url: '/v4/freeboard/' + boardId + '/replys?page=' + page,
    success: function(data) {
        data.list.forEach(function(reply) {
            // 새로 추가
        });
    }
});
```

### 문제 2: 파일 업로드 시 한글 파일명 깨짐

**증상**
- 한글 파일명이 다운로드될 때 "????.pdf" 같이 표시됨

**원인**
- HTTP Content-Disposition 헤더의 인코딩 미지정

**해결**
```java
// FileApi.java
@GetMapping("/v1/files/{id}")
public ResponseEntity<Resource> downloadFile(@PathVariable int id) throws Exception {
    FileVO file = fileService.getFile(id);
    Path filePath = Paths.get(file.getServerSaveName());
    Resource resource = new UrlResource(filePath.toUri());
    
    // UTF-8 인코딩으로 파일명 설정
    String encodedFileName = URLEncoder.encode(file.getOriginalName(), "UTF-8");
    
    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, 
                "attachment; filename*=UTF-8''" + encodedFileName)
        .body(resource);
}
```

### 문제 3: 조회수 증가 후 재접속 시 중복 증가

**증상**
- 같은 사용자가 게시글을 다시 열면 조회수가 또 증가함

**원인**
- 세션 기반 중복 제거가 맞지 않았음 (브라우저 재시작 시 초기화)

**해결**
```java
// 클라이언트 쿠키 기반으로 변경
public FreeboardDTO getDetail(int id, HttpServletRequest request, HttpServletResponse response) {
    Cookie[] cookies = request.getCookies();
    String viewKey = "view_" + id;
    boolean hasViewed = false;
    
    if (cookies != null) {
        for (Cookie c : cookies) {
            if (c.getName().equals(viewKey)) {
                hasViewed = true;
                break;
            }
        }
    }
    
    if (!hasViewed) {
        freeboardMapper.increaseViewCount(id);
        Cookie viewCookie = new Cookie(viewKey, "true");
        viewCookie.setMaxAge(86400); // 24시간
        response.addCookie(viewCookie);
    }
    
    return freeboardMapper.selectById(id);
}
```

---

## 🚀 설치 및 실행 방법

### 사전 요구사항

- **Java 17** 이상
- **Oracle DB** (포트: 1521)
- **Gradle** 7.0 이상

### 1. Oracle DB 설정

```sql
-- Connection이라는 계정 생성
CREATE USER connection IDENTIFIED BY password;
GRANT CONNECT, RESOURCE TO connection;

-- 주요 테이블 생성 (스크립트 별도 제공)
```

### 2. application.properties 설정

```properties
# 데이터베이스 설정
spring.datasource.hikari.jdbc-url=jdbc:log4jdbc:oracle:thin:@//localhost:1521/XE
spring.datasource.hikari.username=connection
spring.datasource.hikari.password=YOUR_PASSWORD
spring.datasource.hikari.maximum-pool-size=5

# 서버 포트
server.port=8090
server.servlet.context-path=/connection

# Thymeleaf 설정
spring.thymeleaf.prefix=classpath:/templates/
spring.thymeleaf.suffix=.html
spring.thymeleaf.cache=false
```

### 3. 빌드 및 실행

```bash
# 프로젝트 클론
git clone https://github.com/byungwook-dev/connection.git
cd connection

# 빌드
./gradlew build

# 실행
./gradlew bootRun

# 또는 JAR 파일 실행
java -jar build/libs/connection-0.0.1-SNAPSHOT.jar
```

### 4. 접속

```
http://localhost:8090/connection
```

---

## 📁 URL 맵핑

| URL | 설명 | 메서드 |
|-----|------|--------|
| `/connection` | 메인 페이지 | GET |
| `/connection/member/join` | 회원가입 | GET / POST |
| `/connection/member/login` | 로그인 | GET / POST |
| `/connection/member/logout` | 로그아웃 | GET |
| `/connection/member/mypage` | 마이페이지 | GET |
| `/connection/board` | 자유게시판 목록 | GET |
| `/connection/board/create` | 자유게시판 글 작성 | GET / POST |
| `/connection/board/post` | 자유게시판 상세 | GET |
| `/connection/league` | 리그게시판 목록 | GET |
| `/connection/league/create` | 리그게시판 글 작성 | GET / POST |
| `/connection/notice/notice1` | 공지사항 | GET |
| `/connection/place/find-place` | 장소 찾기 | GET |

---

## 💡 REST API

### 댓글 API

| 메서드 | URL | 설명 |
|--------|-----|------|
| POST | `/v3/freeboard/{id}/reply` | 댓글 작성 |
| GET | `/v3/freeboard/{id}/replys` | 댓글 목록 조회 (전체) |
| GET | `/v4/freeboard/{id}/replys` | 댓글 페이징 조회 |
| DELETE | `/v3/freeboard/replys/{id}` | 댓글 삭제 |

### 파일 API

| 메서드 | URL | 설명 |
|--------|-----|------|
| GET | `/v1/boards/{id}/files` | 게시글별 파일 목록 조회 |
| GET | `/v1/files` | 파일 전체 조회 |
| GET | `/v1/files/{id}` | 파일 다운로드 |

---

## 📚 사용된 라이브러리

```gradle
dependencies {
    // Spring Boot
    implementation 'org.springframework.boot:spring-boot-starter-web:3.2.5'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    
    // MyBatis
    implementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter:3.0.1'
    
    // Thymeleaf
    implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
    
    // Oracle
    runtimeOnly 'com.oracle.database.jdbc:ojdbc11'
    
    // Lombok
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'
    
    // log4jdbc
    implementation 'org.bgee.log4jdbc-log4j2:log4jdbc-log4j2-jdbc4.1:1.16'
    
    // Test
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

---

## 🎓 배운 점 / 회고

### 기술적 학습

1. **Spring Boot 기초 다지기**
   - Controller, Service, Mapper의 역할 분리
   - 의존성 주입(DI)과 IoC 이해

2. **MyBatis의 강력함**
   - 동적 SQL로 복잡한 쿼리 처리
   - 매퍼 파일로 SQL 관리의 편의성

3. **REST API 설계**
   - JSON 기반 통신
   - AJAX와의 연동

4. **데이터베이스 설계**
   - 정규화와 관계 설정
   - 트랜잭션 처리

### 팀 협업 (하지만 개인 프로젝트로 진행)

- 혼자 전체 스택을 구현해 보며 풀스택 이해도 향상
- 코드 리뷰 없이 스스로 버그를 찾고 해결하는 능력 강화

### 향후 개선점

- [ ] **Spring Security** 도입 — 현재 수동 인증을 자동화
- [ ] **JPA/Hibernate** 마이그레이션 — MyBatis에서 점진적 전환
- [ ] **Redis 캐싱** — 조회수, 인기 게시글 캐싱
- [ ] **트래픽 최적화** — 이미지 리사이징, CDN 활용
- [ ] **모바일 반응형** — Bootstrap 업그레이드
- [ ] **API 문서화** — Swagger/OpenAPI 추가
- [ ] **테스트 작성** — JUnit 5 + Mockito로 단위 테스트

---

## 📄 라이선스

MIT License

---

## 📞 연락처

- GitHub: [byungwook-dev](https://github.com/byungwook-dev)
- Email: your-email@example.com

---

> 이 프로젝트는 Spring Boot를 학습하며 풀스택 개발 경험을 쌓기 위해 만들었습니다.
